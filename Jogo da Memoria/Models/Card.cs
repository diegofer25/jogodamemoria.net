﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Jogo_da_Memoria.Models
{
    public class Card
    {
        public int Id;
        public string ImgFront;
        public string ImgBack;
        public int Pair;
        public bool WasFound;

        public Card(int Id, string ImgFront, string ImgBack, int Pair, bool WasFound)
        {
            this.Id = Id;
            this.ImgFront = ImgFront;
            this.ImgBack = ImgBack;
            this.Pair = Pair;
            this.WasFound = WasFound;
        }

    }
}