from pathlib import Path
import shutil
import time

from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.table import WD_CELL_VERTICAL_ALIGNMENT, WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK, WD_LINE_SPACING
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Cm, Inches, Pt, RGBColor
from reportlab.lib.colors import HexColor, white
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "cv" / "Syed_Adil_Ali_Professional_CV.docx"
PDF_OUTPUT = ROOT / "output" / "cv" / "Syed_Adil_Ali_Professional_CV.pdf"
PDF_TEMP = ROOT / "output" / "cv" / "Syed_Adil_Ali_Professional_CV.building.pdf"
PHOTO = ROOT / "output" / "cv" / "Syed_Adil_Ali_Professional_Headshot.png"

NAVY = "17324D"
TEAL = "2A7F8E"
PALE = "EAF1F5"
WHITE = RGBColor(255, 255, 255)
INK = RGBColor(31, 42, 51)
MUTED = RGBColor(86, 101, 112)
ACCENT = RGBColor(42, 127, 142)


def set_cell_shading(cell, fill):
    tc_pr = cell._tc.get_or_add_tcPr()
    shd = tc_pr.find(qn("w:shd"))
    if shd is None:
        shd = OxmlElement("w:shd")
        tc_pr.append(shd)
    shd.set(qn("w:fill"), fill)


def set_cell_margins(cell, top=120, start=140, bottom=120, end=140):
    tc = cell._tc
    tc_pr = tc.get_or_add_tcPr()
    tc_mar = tc_pr.first_child_found_in("w:tcMar")
    if tc_mar is None:
        tc_mar = OxmlElement("w:tcMar")
        tc_pr.append(tc_mar)
    for name, value in (("top", top), ("start", start), ("bottom", bottom), ("end", end)):
        node = tc_mar.find(qn(f"w:{name}"))
        if node is None:
            node = OxmlElement(f"w:{name}")
            tc_mar.append(node)
        node.set(qn("w:w"), str(value))
        node.set(qn("w:type"), "dxa")


def remove_table_borders(table):
    tbl_pr = table._tbl.tblPr
    borders = tbl_pr.first_child_found_in("w:tblBorders")
    if borders is None:
        borders = OxmlElement("w:tblBorders")
        tbl_pr.append(borders)
    for edge in ("top", "left", "bottom", "right", "insideH", "insideV"):
        tag = borders.find(qn(f"w:{edge}"))
        if tag is None:
            tag = OxmlElement(f"w:{edge}")
            borders.append(tag)
        tag.set(qn("w:val"), "nil")


def set_run_font(run, name="Aptos", size=9, bold=False, color=INK, italic=False):
    run.font.name = name
    run._element.get_or_add_rPr().rFonts.set(qn("w:ascii"), name)
    run._element.get_or_add_rPr().rFonts.set(qn("w:hAnsi"), name)
    run.font.size = Pt(size)
    run.bold = bold
    run.italic = italic
    run.font.color.rgb = color


def format_paragraph(paragraph, before=0, after=0, line=1.0):
    fmt = paragraph.paragraph_format
    fmt.space_before = Pt(before)
    fmt.space_after = Pt(after)
    fmt.line_spacing = line


def add_sidebar_heading(cell, text):
    p = cell.add_paragraph()
    format_paragraph(p, before=13, after=6)
    r = p.add_run(text.upper())
    set_run_font(r, size=9.5, bold=True, color=WHITE)
    r.font.letter_spacing = Pt(0.6)
    return p


def add_sidebar_text(cell, text, bold=False, size=9.0, after=3):
    p = cell.add_paragraph()
    format_paragraph(p, after=after, line=1.12)
    r = p.add_run(text)
    set_run_font(r, size=size, bold=bold, color=WHITE)
    return p


def add_main_heading(cell, text):
    p = cell.add_paragraph()
    format_paragraph(p, before=14, after=8)
    r = p.add_run(text.upper())
    set_run_font(r, size=11.2, bold=True, color=ACCENT)
    r.font.letter_spacing = Pt(0.8)
    return p


def add_role(cell, title, company, dates):
    p = cell.add_paragraph()
    format_paragraph(p, before=12, after=6)
    p.paragraph_format.tab_stops.add_tab_stop(Inches(4.85))
    r = p.add_run(title)
    set_run_font(r, size=10.6, bold=True, color=INK)
    r = p.add_run(f" | {company}")
    set_run_font(r, size=10.0, color=MUTED)
    r = p.add_run(f"\t{dates}")
    set_run_font(r, size=9.3, bold=True, color=ACCENT)


def add_bullets(cell, items):
    for index, item in enumerate(items):
        p = cell.add_paragraph(style="List Bullet")
        format_paragraph(p, after=12 if index == len(items) - 1 else 4.5, line=1.2)
        p.paragraph_format.left_indent = Inches(0.21)
        p.paragraph_format.first_line_indent = Inches(-0.13)
        for run in p.runs:
            set_run_font(run, size=10.0, color=INK)
        if not p.runs:
            r = p.add_run(item)
            set_run_font(r, size=10.0, color=INK)
        else:
            p.runs[0].text = item


def build():
    doc = Document()
    sec = doc.sections[0]
    sec.page_width = Cm(21.0)
    sec.page_height = Cm(29.7)
    sec.top_margin = Cm(0.8)
    sec.bottom_margin = Cm(0.8)
    sec.left_margin = Cm(0.8)
    sec.right_margin = Cm(0.8)

    styles = doc.styles
    styles["Normal"].font.name = "Aptos"
    styles["Normal"]._element.rPr.rFonts.set(qn("w:ascii"), "Aptos")
    styles["Normal"]._element.rPr.rFonts.set(qn("w:hAnsi"), "Aptos")
    styles["Normal"].font.size = Pt(10)
    styles["List Bullet"].font.name = "Aptos"
    styles["List Bullet"].font.size = Pt(10)

    table = doc.add_table(rows=1, cols=2)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False
    table.columns[0].width = Cm(5.35)
    table.columns[1].width = Cm(13.55)
    remove_table_borders(table)

    left, right = table.rows[0].cells
    left.width = Cm(5.35)
    right.width = Cm(13.55)
    left.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.TOP
    right.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.TOP
    set_cell_shading(left, NAVY)
    set_cell_margins(left, top=210, start=230, bottom=210, end=230)
    set_cell_margins(right, top=190, start=300, bottom=170, end=180)

    # Remove the empty starter paragraphs after reusing them for the photo/name.
    lp = left.paragraphs[0]
    lp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    format_paragraph(lp, after=12)
    lp.add_run().add_picture(str(PHOTO), width=Cm(4.15))

    add_sidebar_heading(left, "Contact")
    add_sidebar_text(left, "+92 332 764 8686")
    add_sidebar_text(left, "aliad40.aa@gmail.com", after=7)

    add_sidebar_heading(left, "Core Expertise")
    for skill in (
        "C, C++, C#",
        "ASP.NET and ASP.NET MVC",
        "React and JavaScript",
        "HTML and PHP",
        "REST API development",
        "MySQL and SQL Server",
        "Visual Studio",
        "Agile development",
        "Level 3 product support",
    ):
        add_sidebar_text(left, skill, size=8.8, after=2.2)

    add_sidebar_heading(left, "Education")
    add_sidebar_text(left, "B.S. Computer System Engineering", bold=True, size=9.0, after=2)
    add_sidebar_text(left, "Ghulam Ishaq Khan Institute of Engineering Sciences & Technology", size=8.4, after=2)
    add_sidebar_text(left, "2009 - 2014", size=8.4, after=7)
    add_sidebar_text(left, "F.Sc. Pre-Engineering", bold=True, size=9.0, after=2)
    add_sidebar_text(left, "Al-Abbas College, Dera Ismail Khan", size=8.4, after=2)
    add_sidebar_text(left, "2007 - 2009", size=8.4, after=3)

    p = right.paragraphs[0]
    format_paragraph(p, after=0)
    r = p.add_run("SYED ADIL ALI")
    set_run_font(r, size=27, bold=True, color=RGBColor(23, 50, 77))
    r.font.letter_spacing = Pt(0.8)

    p = right.add_paragraph()
    format_paragraph(p, after=12)
    r = p.add_run("LEAD SOFTWARE ENGINEER")
    set_run_font(r, size=12, bold=True, color=ACCENT)
    r.font.letter_spacing = Pt(1.0)

    add_main_heading(right, "Professional Profile")
    p = right.add_paragraph()
    format_paragraph(p, after=13, line=1.25)
    r = p.add_run(
        "Software engineering professional with experience building and supporting web-based business "
        "systems, including point-of-sale, e-commerce, EDI, warehouse, nutrition dashboard, HR, and "
        "procurement solutions. Skilled in full-cycle development, production support, API development, "
        "and guiding teams through complex technical issues."
    )
    set_run_font(r, size=10.6, color=INK)

    add_main_heading(right, "Professional Experience")
    add_role(right, "Lead Software Engineer", "Invenits Technologies", "Mar 2017 - Present")
    add_bullets(
        right,
        [
            "Design, code, test, debug, and document software using agile development practices.",
            "Provide Level 3 product support and resolve complex technical issues.",
            "Guide less-experienced staff through troubleshooting and solution delivery.",
            "Developed web-based point-of-sale and e-commerce systems using ASP.NET.",
            "Developed and maintain EDI and 3D warehouse solutions using ASP.NET.",
        ],
    )

    add_role(right, "Software Engineer", "IRMCH Lahore", "Feb 2019 - Mar 2020")
    add_bullets(
        right,
        [
            "Developed a nutrition dashboard using ASP.NET MVC.",
            "Developed APIs for a mobile application and maintained multiple dashboards.",
        ],
    )

    add_role(right, "MIS Engineer", "Shifa Foundation", "Aug 2014 - Mar 2017")
    add_bullets(
        right,
        [
            "Developed HR and procurement systems.",
            "Implemented a biometric attendance system and supported network infrastructure.",
        ],
    )

    # Ensure the outer table cannot split across pages.
    tr_pr = table.rows[0]._tr.get_or_add_trPr()
    cant_split = OxmlElement("w:cantSplit")
    tr_pr.append(cant_split)

    props = doc.core_properties
    props.title = "Syed Adil Ali - Professional CV"
    props.subject = "Lead Software Engineer CV"
    props.author = "Syed Adil Ali"
    props.keywords = "software engineer, ASP.NET, C#, React, SQL"

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc.save(OUTPUT)
    print(OUTPUT)


def build_pdf():
    page_w, page_h = A4
    sidebar_w = 164
    c = canvas.Canvas(str(PDF_TEMP), pagesize=A4)
    c.setTitle("Syed Adil Ali - Professional CV")
    c.setAuthor("Syed Adil Ali")
    c.setSubject("Lead Software Engineer CV")

    c.setFillColor(HexColor("#17324D"))
    c.rect(0, 0, sidebar_w, page_h, fill=1, stroke=0)

    # Headshot with a clean white keyline.
    photo_x, photo_y, photo_w, photo_h = 22, page_h - 202, 120, 168
    c.setFillColor(white)
    c.roundRect(photo_x - 2, photo_y - 2, photo_w + 4, photo_h + 4, 4, fill=1, stroke=0)
    c.drawImage(ImageReader(str(PHOTO)), photo_x, photo_y, width=photo_w, height=photo_h,
                preserveAspectRatio=True, anchor="c", mask="auto")

    def side_heading(text, y):
        c.setFillColor(white)
        c.setFont("Helvetica-Bold", 9.5)
        c.drawString(22, y, text.upper())
        return y - 19

    def side_lines(lines, y, bold_first=False, size=9.0, gap=13.2):
        for idx, line in enumerate(lines):
            c.setFont("Helvetica-Bold" if bold_first and idx == 0 else "Helvetica", size)
            c.setFillColor(white)
            c.drawString(22, y, line)
            y -= gap
        return y

    sy = photo_y - 22
    sy = side_heading("Contact", sy)
    sy = side_lines(["+92 332 764 8686", "aliad40.aa@gmail.com"], sy, size=8.9, gap=14)
    sy -= 13
    sy = side_heading("Core Expertise", sy)
    sy = side_lines([
        "C, C++, C#", "ASP.NET / ASP.NET MVC", "React and JavaScript",
        "HTML and PHP", "REST API development", "MySQL and SQL Server",
        "Visual Studio", "Agile development", "Level 3 product support",
    ], sy, size=8.7, gap=13.3)
    sy -= 13
    sy = side_heading("Education", sy)
    sy = side_lines(["B.S. Computer System", "Engineering"], sy, bold_first=True, size=8.8, gap=12.5)
    sy = side_lines(["Ghulam Ishaq Khan Institute", "of Engineering Sciences &", "Technology", "2009 - 2014"], sy - 2, size=8.0, gap=11.5)
    sy -= 11
    sy = side_lines(["F.Sc. Pre-Engineering"], sy, bold_first=True, size=8.8, gap=12.5)
    side_lines(["Al-Abbas College", "Dera Ismail Khan", "2007 - 2009"], sy - 2, size=8.0, gap=11.5)

    main_x = sidebar_w + 22
    main_w = page_w - main_x - 24
    y = page_h - 53
    c.setFillColor(HexColor("#17324D"))
    c.setFont("Helvetica-Bold", 26)
    c.drawString(main_x, y, "SYED ADIL ALI")
    y -= 23
    c.setFillColor(HexColor("#2A7F8E"))
    c.setFont("Helvetica-Bold", 11)
    c.drawString(main_x, y, "LEAD SOFTWARE ENGINEER")
    y -= 34

    body = ParagraphStyle("body", fontName="Helvetica", fontSize=10.8, leading=16.5,
                          textColor=HexColor("#1F2A33"), alignment=TA_LEFT, spaceAfter=0)
    bullet = ParagraphStyle("bullet", parent=body, fontSize=10.3, leftIndent=14, firstLineIndent=-10,
                            bulletIndent=0, leading=16.0)

    def heading(text, ypos):
        c.setFillColor(HexColor("#2A7F8E"))
        c.setFont("Helvetica-Bold", 10.5)
        c.drawString(main_x, ypos, text.upper())
        return ypos - 28

    def paragraph(text, ypos, style=body, width=main_w, gap=7):
        p = Paragraph(text, style)
        _, h = p.wrap(width, 200)
        p.drawOn(c, main_x, ypos - h)
        return ypos - h - gap

    def role(title, company, dates, ypos):
        c.setFillColor(HexColor("#1F2A33"))
        c.setFont("Helvetica-Bold", 10.2)
        c.drawString(main_x, ypos, title)
        x2 = main_x + stringWidth(title, "Helvetica-Bold", 10.2) + 4
        c.setFillColor(HexColor("#566570"))
        c.setFont("Helvetica", 9.6)
        c.drawString(x2, ypos, "| " + company)
        c.setFillColor(HexColor("#2A7F8E"))
        c.setFont("Helvetica-Bold", 9.0)
        c.drawRightString(main_x + main_w, ypos, dates)
        return ypos - 27

    def bullets(items, ypos):
        for item in items:
            ypos = paragraph("- " + item, ypos, bullet, gap=5.5)
        return ypos - 34

    y = heading("Professional Profile", y)
    y = paragraph(
        "Software engineering professional with experience building and supporting web-based business "
        "systems, including point-of-sale, e-commerce, EDI, warehouse, nutrition dashboard, HR, and "
        "procurement solutions. Skilled in full-cycle development, production support, API development, "
        "and guiding teams through complex technical issues.", y, gap=24)

    y = heading("Professional Experience", y)
    y = role("Lead Software Engineer", "Invenits Technologies", "Mar 2017 - Present", y)
    y = bullets([
        "Design, code, test, debug, and document software using agile development practices.",
        "Provide Level 3 product support and resolve complex technical issues.",
        "Guide less-experienced staff through troubleshooting and solution delivery.",
        "Developed web-based point-of-sale and e-commerce systems using ASP.NET.",
        "Developed and maintain EDI and 3D warehouse solutions using ASP.NET.",
    ], y)
    y = role("Software Engineer", "IRMCH Lahore", "Feb 2019 - Mar 2020", y)
    y = bullets([
        "Developed a nutrition dashboard using ASP.NET MVC.",
        "Developed APIs for a mobile application and maintained multiple dashboards.",
    ], y)
    y = role("MIS Engineer", "Shifa Foundation", "Aug 2014 - Mar 2017", y)
    bullets([
        "Developed HR and procurement systems.",
        "Implemented a biometric attendance system and supported network infrastructure.",
    ], y)

    c.showPage()
    c.save()
    for attempt in range(6):
        try:
            PDF_TEMP.replace(PDF_OUTPUT)
            break
        except PermissionError:
            if attempt == 5:
                shutil.copyfile(PDF_TEMP, PDF_OUTPUT)
                PDF_TEMP.unlink()
                break
            time.sleep(0.5)
    print(PDF_OUTPUT)


if __name__ == "__main__":
    build()
    build_pdf()
