import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

import java.io.*;
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) throws IOException {
    int sampleWidth = 2298;
    int sampleHeight = 1414;
    String html =
        "<div\n" + "                            font-size=\"87\"\n" + "                            text=\"- یعطي أمثلة عن مرکبات کیمیائیة شائعة الاستعمال في محیطه.\"\n" + "                            left=\"620\"\n" + "                            top=\"275\"\n" + "                            width=\"1530\"\n" + "                            height=\"90\"\n" + "                            lineType=\"line\"\n" + "                        />\n" + "                        <div\n" + "                            font-size=\"95\"\n" + "                            text=\"- یتعرف الی بعض الکواشف (محلول قشر الفجل، محلول الملفوف البنفسجي،\"\n" + "                            left=\"170\"\n" + "                            top=\"390\"\n" + "                            width=\"1985\"\n" + "                            height=\"90\"\n" + "                            lineType=\"line\"\n" + "                        />\n" + "                        <div\n" + "                            font-size=\"87\"\n" + "                            text=\"محلول عباد الشمس)، ویستدل علي أنها تغیر ألوانها حسب الوسط الکیمیائي.\"\n" + "                            left=\"290\"\n" + "                            top=\"505\"\n" + "                            width=\"1800\"\n" + "                            height=\"88\"\n" + "                            lineType=\"line\"\n" + "                        />\n" + "                        <div\n" + "                            font-size=\"90\"\n" + "                            text=\"- یمیز بین المواد الحمضیة والمواد القلویة (القاعدیة) باستخدام أحد الکواشف.\"\n" + "                            left=\"260\"\n" + "                            top=\"620\"\n" + "                            width=\"1900\"\n" + "                            height=\"90\"\n" + "                            lineType=\"line\"\n" + "                        />\n" + "                        <div\n" + "                            font-size=\"87\"\n" + "                            text=\"یعطي أمثلة عن بعض الأملاح الشائعة.\"\n" + "                            left=\"1170\"\n" + "                            top=\"745\"\n" + "                            width=\"950\"\n" + "                            height=\"92\"\n" + "                            lineType=\"line\"\n" + "                        />\n" + "                        <div\n" + "                            font-size=\"95\"\n" + "                            text=\"- یعطي أمثلة عن التفاعل الکیمیائي: الاحتراق، تکون الصدأ، تفاعل الحمض مع\"\n" + "                            left=\"120\"\n" + "                            top=\"854\"\n" + "                            width=\"2040\"\n" + "                            height=\"90\"\n" + "                            lineType=\"line\"\n" + "                        />\n" + "                        <div\n" + "                            font-size=\"87\"\n" + "                            text=\"مواد کلسیة ومع بعض الفلزات.\"\n" + "                            left=\"1350\"\n" + "                            top=\"970\"\n" + "                            width=\"750\"\n" + "                            height=\"80\"\n" + "                            lineType=\"line\"\n" + "                        />\n" + "                        <div\n" + "                            font-size=\"87\"\n" + "                            text=\"- یستدل علي حدوث تفاعل کیمیائي من ملاحظة انتاج مادة أو مواد جدیدة.\"\n" + "                            left=\"340\"\n" + "                            top=\"1090\"\n" + "                            width=\"1830\"\n" + "                            height=\"86\"\n" + "                            lineType=\"line\"\n" + "                        />\n";
    Document document = Jsoup.parse(html);
    ArrayList<Element> divs = new ArrayList<>(document.select("div"));
    for (int i = 0; i < divs.size(); i++) {
      double divWidthCoefficient = Integer.parseInt(divs.get(i).attr("width")) / (sampleWidth * 1.0);
      double divHeightCoefficient = Integer.parseInt(divs.get(i).attr("height")) / (sampleHeight * 1.0);
      double divTopCoefficient = Integer.parseInt(divs.get(i).attr("top")) / (sampleHeight * 1.0);
      double divLeftCoefficient = Integer.parseInt(divs.get(i).attr("left")) / (sampleWidth * 1.0);
      double divFontSizeCoefficient = Integer.parseInt(divs.get(i).attr("font-size")) / (sampleWidth * 1.0);

      divs.get(i).attr("top","`${" + divTopCoefficient + " * " + "height}px`");
      divs.get(i).attr("width","`${" + divWidthCoefficient + " * " + "width}px`");
      divs.get(i).attr("height","`${" + divHeightCoefficient + " * " + "height}px`");
      divs.get(i).attr("left","`${" + divLeftCoefficient + " * " + "width}px`");
      divs.get(i).attr("font-size","`${" + divFontSizeCoefficient + " * " + "width}px`");
    }
    File file = new File("output.html");
    FileOutputStream fileOutputStream = new FileOutputStream(file);
    BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(fileOutputStream));
    for (Element div: divs) {
      bufferedWriter.write(div.toString());
      bufferedWriter.newLine();
      bufferedWriter.flush();
    }
    bufferedWriter.flush();
    bufferedWriter.close();
    fileOutputStream.close();
    System.out.println("new html written on the specified file");
  }
}
