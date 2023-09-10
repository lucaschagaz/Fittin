const getPhotoWithDayWeek = (day: number, treino: string) => {
  if (treino == '')
    switch (day) {
      case 1:
        return 'domingo';
        break;
      case 2:
        return 'segunda';
        break;

      case 3:
        return 'terca';
        break;

      case 4:
        return 'quarta';
        break;
      case 5:
        return 'quinta';
        break;
      case 6:
        return 'sexta';
        break;
      case 7:
        return 'sabado';
        break;

      default:
        return 'Informe um dia da semana';
        break;
    }
};
