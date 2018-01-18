using Jogo_da_Memoria.Models;
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

            Random random = new Random();
            string[] imgs = new string[] { "android", "chrome", "facebook", "firefox", "googleplus", "html5", "twitter", "windows" };

            List<Card> cardsList = new List<Card>();

            for (int i = 0; i < 2; i++)
            {
                for (int j = 0; j < imgs.Length; j++)
                {
                    cardsList.Add(new Card(imgs[j], "github", j, false));
                }
            }


            //return cards.OrderBy(x => random.Next()).ToArray();

            return View(cardsList.OrderBy(x => random.Next()).ToList());
        }
        public ActionResult Ranking()
        {
            return View();
        }
        public RedirectResult Git()
        {
            return Redirect("https://github.com/diegofer25/jogodamemoria.net");
        }
        public ActionResult EditRanking()
        {
            return View();
        }
    }
}