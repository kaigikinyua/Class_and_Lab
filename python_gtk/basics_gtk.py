import gi

gi.require_version("Gtk","3.0")
from gi.repository import Gtk

class TestWindow(Gtk.Window):
    def __init__(self):
        super().__init__(title="Basics")
        self.button=Gtk.Button(label="Click Me")
        self.button.connect("clicked",self.on_btn_clicked)
        self.add(self.button)
    def on_btn_clicked(self,widget):
        print(widget)
        print("Hello")

if __name__=="__main__":
    win=TestWindow()
    win.connect("destroy",Gtk.main_quit)
    win.show_all()
    Gtk.main()