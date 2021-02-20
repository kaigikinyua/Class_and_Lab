import java.awt.*;
import javax.swing.*;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
class MyString extends JPanel{
    private String message;
    MyString(String message){
        this.message=message;
    }
    //@override
    public void paintComponent(Graphics g){
        super.paintComponent(g);
        Color color=new Color(100,100,255);
        g.setColor(color);
        g.drawString(this.message,10,10);
        g.drawRoundRect(100,100,100,50,10,10);
    }
    public void repaint(){
        super.repaint();
        this.message=this.message+"x";
        System.out.println("Repainting");
    }

}
class GameCharacter extends JPanel{
    private int currX,currY,deltaX,deltaY;
    GameCharacter(int x, int y,int deltaX,int deltaY){
        this.currX=x;this.currY=y;
        this.deltaX=deltaX;this.deltaY=deltaY;
    }
    //@override
    public void paintComponent(Graphics g){
        super.paintComponent(g);
        Color color=new Color(100,200,100);
        g.setColor(color);
        g.drawRoundRect(this.currX,this.currY,100,50,10,10);
    }
    public void repaint(){
        super.repaint();
        if(getHeight()-(100+this.currX)<0){
            this.deltaX=-this.deltaX;
        }
        if(getWidth()-(50+this.currY)<0){
            this.deltaY=-this.deltaY;
        }
        System.out.println(getWidth()-(this.currY+100));
        this.currX+=deltaX;
        this.currY+=deltaY;
    }

}
class RepaintOnClick implements MouseListener {
    public void mousePressed(MouseEvent evt) {
        Component source = (Component)evt.getSource();
        source.repaint();
    }
    public void mouseClicked(MouseEvent evt) { }
    public void mouseReleased(MouseEvent evt) { }
    public void mouseEntered(MouseEvent evt) { }
    public void mouseExited(MouseEvent evt) { }
}

class Game{
    public static void main(String[] args){
        JFrame jf=new JFrame();
        //MyString ms=new MyString("Graphics with java");
        //ms.addMouseListener(new RepaintOnClick());
        GameCharacter gc=new GameCharacter(10,10,5,8);
        gc.addMouseListener(new RepaintOnClick());
        jf.setContentPane(gc);
        jf.setSize(400,400);
        jf.setVisible(true);
        jf.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}