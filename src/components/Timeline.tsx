'use client';

import React from 'react';
import { MdWork } from 'react-icons/md';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ExperienceIconMap, ExperienceIconNames } from '../constants';

export const Timeline = ({
  items,
}: {
  items: {
    years: string;
    title: string;
    description: string;
    organization?: { name: string };
    icon?: ExperienceIconNames;
    bgColor?: string;
  }[];
}) => {
  return (
    <VerticalTimeline>
      {items.map((item, index) => {
        const bgColor = item.bgColor ? item.bgColor : 'rgb(33, 150, 243)';
        return (
          <VerticalTimelineElement
            key={index}
            className='vertical-timeline-element--work '
            contentStyle={{
              background: bgColor,
              color: '#fff',
            }}
            contentArrowStyle={{
              borderRight: `7px solid  ${bgColor}`,
            }}
            date={item.years}
            iconStyle={{
              background: bgColor,
              color: '#fff',
            }}
            icon={
              item.icon ? (
                React.createElement(ExperienceIconMap[item.icon])
              ) : (
                <MdWork />
              )
            }
            visible={true}
          >
            <h3 className='vertical-timeline-element-title'>{item.title}</h3>
            <h4 className='vertical-timeline-element-subtitle'>
              {item.organization?.name}
            </h4>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};
