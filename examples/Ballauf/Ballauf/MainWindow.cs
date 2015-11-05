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

	protected void BtnHallo_Clicked (object sender, EventArgs e)
	{
		BtnJetzthier.Visible = true; 
		btnHallo.Visible = false;
	}

	protected void AfterClicked (object o, RemovedArgs args)
	{
		throw new NotImplementedException ();
	}

	protected void Lastclicktowin (object o, DestroyEventArgs args)
	{
		throw new NotImplementedException ();
	}

	protected void Reset (object o, DeleteEventArgs args)
	{
		throw new NotImplementedException ();
	}

	protected void NowVisible (object o, VisibilityNotifyEventArgs args)
	{
		throw new NotImplementedException ();
	}

	protected void clicked (object sender, EventArgs e)
	{
		throw new NotImplementedException ();
	}

	protected void BtnJetzthier_Clicked (object sender, EventArgs e)
	{
		BtnJetzthier.Visible = false;
			BtnNochhier.Visible = true;
	}

	protected void BtnNochhier_Clicked (object sender, EventArgs e)
	{
		BtnNochhier.Visible = false;
		BtnFinish.Visible = true;
	}

	protected void BtnFinish_Clicked (object sender, EventArgs e)
	{
		BtnFinish.Visible = false;
		BtnFortsetzung.Visible = true;
	}
		
	protected void BtnFortsetzung_clicked (object sender, EventArgs e)
	{
		BtnEnde.Visible = true;
		BtnFortsetzung.Visible = false;
	}

	protected void BtnEnde_Clicked (object sender, EventArgs e)
	{
		BtnEnde.Visible = false;
		BtnEndeEnde.Visible = true;
	}

	protected void BtnEndeEnde_Clicked (object sender, EventArgs e)
	{
		BtnEndeEndeEnde.Visible = true; 
		BtnEndeEnde.Visible = false;
	}

	protected void BtnEndeEndeEnde_Clicked (object sender, EventArgs e)
	{
		throw new NotImplementedException ();
	}
}
	