import java.awt.*;
import javax.swing.*;
class MyString extends JPanel{
    private String message;
    MyString(String message){
        this.message=message;
    }
    //@override
    public void paintComponent(Graphics g){
        super.paintComponent(g);
        Color color=new Color(255,100,100);
        g.setColor(color);
        g.drawString(this.message,10,10);
        g.drawRoundRect(100,100,100,50,10,10);
    }

}


class Game{
    public static void main(String[] args){
        JFrame jf=new JFrame();
        MyString ms=new MyString("Graphics with java");
        jf.setContentPane(ms);
        jf.setSize(300,300);
        jf.setVisible(true);
        jf.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}