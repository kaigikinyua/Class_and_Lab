import javax.swing.*;
import java.awt.*;

class PasswordScreen{
    JPanel createScreen(){
        JPanel passCreen=new JPanel();
        JLabel label=new JLabel("I am a label");
        passCreen.add(label);
        return passCreen;
    }
}
class Main{
    public static void main(String[] args){
        JFrame mainScreen=new JFrame("Java GUI Development");
        JPanel navigation=new JPanel();
        JPanel screen=new JPanel();
        JPanel mainPanel=new JPanel();
        JButton next=new JButton("Next");
        navigation.add(next);
        next.addActionListener(e->{
            System.out.println("Hello World");
            JLabel label=new JLabel("New Label");
            screen.add(label);
            //code runs but the label is not added
            //need to re-render window 
        });

        PasswordScreen passCreen=new PasswordScreen();
        screen.add(passCreen.createScreen());
        
        mainPanel.add(navigation);
        mainPanel.add(screen);
        
        mainScreen.setContentPane(mainPanel);
        mainScreen.setSize(300,300);
        mainScreen.setVisible(true);
    }
}