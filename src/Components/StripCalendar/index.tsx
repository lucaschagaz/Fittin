import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import Calendar, {CalendarStripProps} from 'react-native-calendar-strip';
import moment from 'moment';
import 'moment/locale/pt-br';

interface IStripCalendarProps extends CalendarStripProps {}

export const StipCalendar = ({...rest}: IStripCalendarProps) => {
  const {width} = Dimensions.get('screen');

  const locale = {
    name: 'fr',
    config: {
      months:
        'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split(
          '_',
        ),
      monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
      weekdays:
        'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split(
          '_',
        ),
      weekdaysShort: 'D_S_T_Q_Q_S_S'.split('_'),
      weekdaysMin: 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY [às] LT',
        LLLL: 'dddd, D [de] MMMM [de] YYYY [às] LT',
      },
      calendar: {
        sameDay: '[Hoje às] LT',
        nextDay: '[Amanhã às] LT',
        nextWeek: 'dddd [às] LT',
        lastDay: '[Ontem às] LT',
        // lastWeek: function () {
        //     return (day() === 0 || day() === 6) ?
        //         '[Último] dddd [às] LT' : // Saturday + Sunday
        //         '[Última] dddd [às] LT'; // Monday - Friday
        // },
        sameElse: 'L',
      },
      relativeTime: {
        future: 'em %s',
        past: '%s atrás',
        s: 'segundos',
        m: 'um minuto',
        mm: '%d minutos',
        h: 'uma hora',
        hh: '%d horas',
        d: 'um dia',
        dd: '%d dias',
        M: 'um mês',
        MM: '%d meses',
        y: 'um ano',
        yy: '%d anos',
      },
      ordinal: '%dº',
    },
  };

  return (
    <>
      <Calendar
        {...rest}
        scrollable={true}
        style={{
          width: width * 0.98,
          height: 100,
          borderRadius: 15,
        }}
        rightSelector={[]}
        leftSelector={[]}
        locale={locale}
        calendarHeaderStyle={{
          alignSelf: 'flex-start',
          paddingLeft: 20,
          fontSize: 22,
          color: '#010101',
        }}
        dateNumberStyle={{
          color: '#999',
          paddingBottom: 3,
          marginBottom: 5,
          paddingHorizontal: 3,
          width: 30,
        }}
        dateNameStyle={{fontSize: 17, marginBottom: 8}}
        highlightDateNumberStyle={{
          color: 'white',
          backgroundColor: '#0943d7',
          borderRadius: 5,
          paddingHorizontal: 3,
          paddingBottom: 3,
          marginBottom: 5,
          width: 30,
        }}
        highlightDateNameStyle={{
          fontSize: 17,
          marginBottom: 8,
        }}
      />
    </>
  );
};
