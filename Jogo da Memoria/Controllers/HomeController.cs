using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Jogo_da_Memoria.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Game()
        {
            return View();
        }
        public RedirectResult Git()
        {
            return Redirect("https://github.com/diegofer25/jogodamemoria.net");
        }
    }
}