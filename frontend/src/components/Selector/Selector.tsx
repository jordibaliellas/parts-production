import React, { ChangeEvent } from 'react';
import { makeId } from '../../utils/make-id';
import './Selector.css';

export interface ItemListSelector {
  label: string;
  value: string;
  selected?: boolean;
}

interface SelectorProps {
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  optionDefault: string;
  list: ItemListSelector[];
}

export function Selector(props: SelectorProps) {

  const listId = makeId();
  const valueSelector = props.list.find(item => item.selected === true)?.value || '0';

  return (
    <select value={valueSelector} className="selector" onChange={props.handleChange}>
      <option value="0">{props.optionDefault}</option>

        {props.list.map((item, i) => 
          (<option key={listId + '-' + i} value={item.value}>{item.label}</option>)
        )}
      </select>
  );
}