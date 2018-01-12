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
        public JavaScriptResult prepareGame(string[] imgs)
        {
            int aux = 0;
            Card[] cards = new Card[16];
            for (int i = 0; i < 2; i++)
            {
                for (int j = 1; j <= 8; j++)
                {
                    cards[aux] = new Card(imgs[j], "../img/cross.png", j, false);

                    aux++;
                }
            }
            
            return JavaScript(cards[1].ImgBack);
        }
    }
}