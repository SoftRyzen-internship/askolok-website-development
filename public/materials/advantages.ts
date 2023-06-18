import { IAdvantageCardProps } from '@/components/common/AdvantageCard/AdvantageCard.props';

export const advantages: IAdvantageCardProps[] = [
  {
    iconUrl: '/svg/advantages/pc.svg',
    alt: 'Компьютер',
    title: 'Сайты с высокой скоростью загрузки',
    description: 'Благодаря быстрой загрузке, сайт может получать и конвертировать больше трафика',
    color: 'gradient',
  },
  {
    iconUrl: '/svg/advantages/gear.svg',
    alt: 'Шестеренка',
    title: 'Удобная система управления',
    description: 'Вы сможете сами редактировать контент без помощи программиста',
    color: 'black',
  },
  {
    iconUrl: '/svg/advantages/lock.svg',
    alt: 'Замок',
    title: 'Модуль защиты от взлома',
    description:
      'Во время разработки устанавливаются плагины, которые будут защищать сайт от взлома',
    color: 'white',
  },
];
