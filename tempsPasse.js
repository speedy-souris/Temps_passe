function TempsPasse(hDepart, mDepart, sDepart, hFin, mFin, sFin)
{
	if (sFin < sDepart)
	{
		var sT = (60 - sDepart) + sfin;
	
	}else 
	{
		var sT = sFin - sDepart;
	}
	
	if (mFin < mDepart)
	{
		var mT = (60 - mDepart) + mFin;
	
	}else
	{
		var mT = mFin - mDepart;
	}

	if (hFin < hDepart)
	{
		var hT = (24 - hDepart) + hFin;
	
	}else
	{
		var hT = hFin - hDepart;
	}


return alert('Temps Passé ' + hT + ' H ' + mT + ' MN ' + sT + ' S' );
}


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

			/*
			*
			*   HEURE De Fin
			*
			*/

var heureFin = Number(prompt("Entrez l'heure de fin (0 à 23)")) ;

if (heureFin >= 0 && heureFin <= 23)
{
	heureFin = heureFin;

}else
{
	while( heureFin < 0 || heureFin > 23)

	{
		heureFin = Number(prompt("Entrez l'heure de fin (0 à 23)"));
	}
}

			/*
			*
			*  Minute De Fin
			*
			*/

var minuteFin = Number(prompt("Entrez les minutes de fin (0 à 59)")) ;

if (minuteFin >= 0 && minuteFin <= 59)
{
	minuteFin = minuteFin;

}else
{
	while( minuteFin < 0 || minuteFin > 59)

	{
		minuteFin = Number(prompt("Entrez les minutes de fin (0 à 59)"));
	}
}

			/*
			*
			*Seconde De Fin
			*
			*/	

var secondeFin = Number(prompt("Entrez les secondes de fin (0 à 59)")) ;

if (secondeFin >= 0 && secondeFin <= 59)
{
	secondeFin = secondeFin;

}else
{
	while( secondeFin < 0 || secondeFin > 59)

	{
		secondeFin = Number(prompt("Entrez les secondes de fin (0 à 59)"));
	}
}

TempsPasse(heureDebut, minuteDebut, secondeDebut, heureFin, minuteFin, secondeFin);			
			