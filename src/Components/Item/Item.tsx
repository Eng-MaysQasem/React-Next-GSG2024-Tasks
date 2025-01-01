import React from 'react';
import { Trash } from '@phosphor-icons/react';
import { IItem } from '../../assets/Type.tsx';
import './Item.css';

interface IProps {
  item: IItem;
  handleComplete: () => void;
  handleDelete: () => void;
}

function Item(props: IProps) {
  return (
    <div>
      <input
        type='checkbox'
        checked={props.item.IsComplete}
        onChange={props.handleComplete}
      />
      <span>{props.item.Task}</span>
      <span>
        <Trash size={20} color="#cd0e0e" weight="fill" onClick={props.handleDelete} />
      </span>
      <span>isUrgent: {props.item.IsUrgent.toString()}</span>
    </div>
  );
}

export default Item;
