
			/*
			*
			*   HEURE De Début
			*
			*/

var heureDebut = Number(prompt("Entrez l'heure de départ (0 à 23)")) ;

if (heureDebut >= 0 && heureDebut <= 23)
{
	heureDebut = heureDebut;

}else
{
	while( heureDebut < 0 || heureDebut > 23)

	{
		heureDebut = Number(prompt("Entrez l'heure de départ (0 à 23)"));
	}
}

			/*
			*
			*  Minute De Début
			*
			*/

var minuteDebut = Number(prompt("Entrez les minutes de départ (0 à 59)")) ;

if (minuteDebut >= 0 && minuteDebut <= 59)
{
	minuteDebut = minuteDebut;

}else
{
	while( minuteDebut < 0 || minuteDebut > 59)

	{
		minuteDebut = Number(prompt("Entrez les minutes de départ (0 à 59)"));
	}
}

			/*
			*
			*Seconde De Début
			*
			*/	

var secondeDebut = Number(prompt("Entrez les secondes de départ (0 à 59)")) ;

if (secondeDebut >= 0 && secondeDebut <= 59)
{
	secondeDebut = secondeDebut;

}else
{
	while( secondeDebut < 0 || secondeDebut > 59)

	{
		secondeDebut = Number(prompt("Entrez les secondes de départ (0 à 59)"));
	}
}