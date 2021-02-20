import javax.swing.*;

public class Gui{
	public static void main(String[] args){
		JFrame frame=new JFrame();
		JButton button=new JButton("Button");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.getContentPane().add(button);
		frame.setSize(100,100);
		frame.setVisible(true);
	}
}
