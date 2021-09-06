using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APILab2.Controllers
{
    public class Film
    {
        public string Titre { get; set; }// propriété doit être publique car la classe sera manipulée par le framework
        public string Directeur { get; set; }
        public string Auteur { get; set; }
        public string Date { get; set; }
        public string Description { get; set; }
        public string Budget { get; set; }
        public string TotalUSA { get; set; }
        public string TotalMonde { get; set; }
        public Vedette[] Vedette { get; set; }
    
    }
}
