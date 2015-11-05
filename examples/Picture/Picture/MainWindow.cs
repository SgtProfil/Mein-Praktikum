using System;
using Gtk;

public partial class MainWindow: Gtk.Window
{
	public MainWindow () : base (Gtk.WindowType.Toplevel)
	{
		Build ();


	}

	protected void OnDeleteEvent (object sender, DeleteEventArgs a)
	{
		Application.Quit ();
		a.RetVal = true;
	}

	protected void btnHover_Motion (object o, MotionNotifyEventArgs args)
	{
		Console.WriteLine ("motion");
	}

	protected void btnHover_Clicked (object sender, EventArgs e)
	{
		

	}
}
