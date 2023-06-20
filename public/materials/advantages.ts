import { IAdvantageCardProps } from '@/components/common/AdvantageCard/AdvantageCard.props';

export const advantages: IAdvantageCardProps[] = [
  {
    iconUrl: '/images/advantages/pc.svg',
    alt: 'Компьютер',
    title: 'Сайты с высокой скоростью загрузки',
    description: 'Благодаря быстрой загрузке, сайт может получать и конвертировать больше трафика',
    color: 'gradient',
  },
  {
    iconUrl: '/images/advantages/gear.svg',
    alt: 'Шестеренка',
    title: 'Удобная система управления',
    description: 'Вы сможете сами редактировать контент без помощи программиста',
    color: 'black',
  },
  {
    iconUrl: '/images/advantages/lock.svg',
    alt: 'Замок',
    title: 'Модуль защиты от взлома',
    description:
      'Во время разработки устанавливаются плагины, которые будут защищать сайт от взлома',
    color: 'white',
  },
];
