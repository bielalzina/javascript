/**
 * Retorna una nota qualitativa en funció del valor quantitatiu introduït
 * <ol>
 * <li>0 o 2 -> Molt Deficient</li>
 * <li>3 o 4 -> Insuficient</li>
 * <li>5 -> Aprovat</li>
 * <li>6 -> Bé</li>
 * <li>7 o 8 -> Notable</li>
 * <li>9 o 10 -> Excel·lent</li>
 * <li>Resta de casos -> Nota incorrecta</li>
 * </ol>
 * @param {type} nota El valor quantitatiu a identificar
 * @returns {string} nota qualitativa*/

function retornaNotaQualitativa(nota) {
	let notaQualitativa = 'Nota incorrecta';
	nota = parseFloat(nota);

	switch (nota) {
		case 0:
		case 1:
		case 2: {
			notaQualitativa = 'MOLT DEFICIENT';
			break;
		}

		case 3:
		case 4: {
			notaQualitativa = 'INSUFICIENT';
			break;
		}

		case 5: {
			notaQualitativa = 'APROVAT';
			break;
		}

		case 6: {
			notaQualitativa = 'BÉ';
			break;
		}

		case 7:
		case 8: {
			notaQualitativa = 'NOTABLE';
			break;
		}

		case 9:
		case 10: {
			notaQualitativa = 'EXCEL·LENT';
			break;
		}
	}
	return notaQualitativa;
}
