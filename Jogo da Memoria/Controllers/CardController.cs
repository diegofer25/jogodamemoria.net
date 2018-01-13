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
        private string[] imgs = new string[8] { "../img/android.png", "../img/chrome.png", "../img/facebook.png", "../img/firefox.png", "../img/googleplus.png", "../img/html5.png", "../img/twitter.png", "../img/windows.png" };
        [HttpGet]
        public JsonResult PrepareGame()
        {
            int numberOfCards = imgs.Length * 2;
            int aux = 0;
            Card[] cards = new Card[numberOfCards];
            for (int i = 0; i < 2; i++)
            {
                for (int j = 0; j < imgs.Length; j++)
                {
                    cards[aux] = new Card(aux, imgs[j], "../img/github.png", j, false);
                    aux++;
                }
            }
            return Json(RandomizeCards(cards), JsonRequestBehavior.AllowGet);
        }
        public Card[] RandomizeCards(Card[] cards)
        {
            Random random = new Random();
            Card[] tempCards = new Card[cards.Length];
            int[] numbers = new int[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 };
            int[] randomNumbers = numbers.OrderBy(x => random.Next()).ToArray();
            for (int i = 0; i < tempCards.Length; i++)
            {
                tempCards[i] = cards[randomNumbers[i]];
            }
            return tempCards;
        }
    }
}