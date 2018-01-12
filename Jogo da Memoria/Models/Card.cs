using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Jogo_da_Memoria.Models
{
    public class Card
    {
        public string ImgFront { get; private set; }
        public string ImgBack { get; private set; }
        public int Paridade { get; private set; }
        public bool Controle { get; private set; }

        public Card(string imgFront, string imgBack, int paridade, bool controle)
        {
            this.ImgFront = imgFront;
            this.ImgBack = imgBack;
            this.Paridade = paridade;
            this.Controle = controle;
        }

    }
}