using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Ajax;

namespace Jogo_da_Memoria.Controllers
{
    public class GameController : Controller
    {
        [HttpGet]
        public String HelloAjax()
        {
            return "O jogo ainda não está pronto";
        }
    }
}