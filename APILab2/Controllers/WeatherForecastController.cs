using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APILab2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        [HttpGet]

      
        public  Film[] Get()
        {

            Film films1 = new Film()
            {

                Titre = "Les minions",
                Directeur = "JF Rancourt",
                Auteur = "Les auteurs",
                Date = "11 janvier 2021",
                Description = "film d'animation américain réalisé par Kyle Balda et Pierre Coffin, sorti en 2015. Il s'agit d'une préquelle de la saga Moi, moche et méchant. ",
                Budget = "$74 000 000",
                TotalUSA = "$336 045 770",
                TotalMonde = "$1 159 444 662",

                Vedette = new Vedette[] {
                    new Vedette { Nom = "Sandra Bullock", Age = 57, Personnage = "Scarlet Overkill (voix)" }, 
                    new Vedette { Nom = "Jon Hamm", Age =508, Personnage = "Herb Overkill  (voix)" },
                    new Vedette { Nom = "Michael Keaton", Age = 70, Personnage = "Walter Nelson (voix)" }
                },
              
            }
                ;
            Film films2 = new Film()
            {

                Titre = "Fight Club",
                Directeur = "David Fincher",
                Auteur = "Chuck Palahniuk(novel)Jim Uhls(screenplay),",
                Date = "1999",
                Description = "film américain de David Fincher, sorti en 1999 et adapté du roman éponyme de Chuck Palahniuk publié en 1996. Le narrateur est un homme qui, trouvant peu de satisfaction dans son activité professionnelle et sa vie en général, crée avec l'énigmatique Tyler Durden, personnage anticonformiste, un club de combats clandestins permettant à ses membres d'évacuer leur mal-être par la violence. ",
                Budget = "$63 000 000",
                TotalUSA = "$37 030 102",
                TotalMonde = "$101 209 702",

                Vedette = new Vedette[] {
                    new Vedette { Nom = "Brad Pitt", Age = 57, Personnage = "Tyler Durden" },
                    new Vedette { Nom = "Edward Norton", Age =52, Personnage = "The Narrator" },
                    new Vedette { Nom = "Meat Loaf", Age = 73, Personnage = "Robert 'Bob' Paulsen" }
                },

            }
                ;
            Film films3 = new Film()
            {

                Titre = "Mission Impossible",
                Directeur = "Bryan de Palma",
                Auteur = "David Koepp (story) and Steven Koepp (story) and Robert TOwne (screenplay) ",
                Date = "1996",
                Description = "An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization.  ",
                Budget = "$80 000 000",
                TotalUSA = "$180 981 856",
                TotalMonde = "$457 696 391",

                Vedette = new Vedette[] {
                    new Vedette { Nom = "Tom Cruise", Age = 59, Personnage = "Ethan Hunt" },
                    new Vedette { Nom = "John Voight", Age =82, Personnage = "Jim Phelps" },
                    new Vedette { Nom = "Emmanuelle Béard", Age = 58, Personnage = "Claire" }
                },

            }
            ;
            Film[] FilmTab = new Film[] { films1, films2, films3 };
            return FilmTab;
        }
    }
}
