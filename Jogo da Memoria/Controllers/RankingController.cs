using Jogo_da_Memoria.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Jogo_da_Memoria.Controllers
{
    public class RankingController : Controller
    {
        jogodamemoria_dbEntities jm_db = new jogodamemoria_dbEntities();
        [HttpPost]
        public string SavePlayerRank(string Name, string Time)
        {
            string menssage;
            ranking lastRk = jm_db.ranking.ToList().AsQueryable().Last();
            ranking rk = new ranking
            {
                id = (lastRk.id) + 1,
                nome = Name,
                tempo = TimeSpan.Parse(Time)
            };
            jm_db.ranking.Add(rk);
            jm_db.SaveChanges();
            menssage = "Pontuação salva no Ranking com sucesso!";
            return menssage;
        }
        [HttpGet]
        public JsonResult GetRank()
        {
            List<ranking> list = jm_db.ranking.ToList();
            return Json(list, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public bool DeletePlayer(int id)
        {
            jm_db.ranking.Remove(jm_db.ranking.Find(id));
            jm_db.SaveChanges();

            return jm_db.ranking.Find(id) == null;
        }
    }
}