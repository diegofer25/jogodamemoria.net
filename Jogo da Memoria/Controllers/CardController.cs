using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Ajax;
using Jogo_da_Memoria.Models;

namespace Jogo_da_Memoria.Controllers
{
    public class CardController : Controller
    {
        [HttpGet]
        public JsonResult PrepareGame()
        {
            return Json(creatCards(), JsonRequestBehavior.AllowGet);
        }

        public List<Card> creatCards()
        {
            Random random = new Random();
            string[] imgs = new string[] { "android", "chrome", "facebook", "firefox", "googleplus", "html5", "twitter", "windows" };
            int aux = 0;
            Card[] cards = new Card[(imgs.Length*2)];
            for (int i = 0; i < 2; i++)
            {
                for (int j = 0; j < imgs.Length; j++)
                {
                    cards[aux] = new Card(aux, imgs[j], "github", j, false);
                    aux++;
                }
            }
            return cards.OrderBy(x => random.Next()).ToList();
        }
    }
}