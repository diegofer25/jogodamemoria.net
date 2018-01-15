using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Jogo_da_Memoria.Controllers
{
    public class AdminController : Controller
    {
        [HttpPost]
        public bool LoginAdmin(string name, string password)
        {
            return name == "diego@admin" && password == "12345";
        }
    }
}