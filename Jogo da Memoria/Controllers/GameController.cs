using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Ajax;
using Jogo_da_Memoria.Models;

namespace Jogo_da_Memoria.Controllers
{
    public class GameController : Controller
    {
        [HttpGet]
        public JsonResult PrepareGame()
        {
            string[] imgs = new string[8] { "../img/android.png", "../img/chrome.png", "../img/facebook.png", "../img/firefox.png", "../img/googleplus.png", "../img/html5.png", "../img/twitter.png", "../img/windows.png" };
            int aux = 0;
            Card[] cards = new Card[16];
            for (int i = 0; i < 2; i++)
            {
                for (int j = 0; j < 8; j++)
                {
                    cards[aux] = new Card(aux, imgs[j], "../img/github.png", j, false);
                    aux++;
                }
            }
            return Json(cards, JsonRequestBehavior.AllowGet);
        }
    }
}