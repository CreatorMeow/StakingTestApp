import { ChangeEventHandler, MouseEvent, useState } from 'react';
import styles from './Main.module.css';
import { CaretDoubleRight } from '@phosphor-icons/react';

interface Props {
  value?: number;
  min?: number;
  max?: number;
  onChange?(value: number): void;
  onDragStart?(): void;
  onDragEnd?(value: number): void;
}

const Slider = ({
  min,
  max,
  value,
  onChange,
  onDragEnd,
  onDragStart,
}: Props) => {
  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    if (!onChange) return;
    const { value } = evt.target;
    onChange(+value);
  };

  const handleDragStart = () => {
    if (onDragStart) onDragStart();
    setIsDragging(true);
  };

  const handleDragEnd = (e: MouseEvent<HTMLInputElement>) => {
    if (onDragEnd) onDragEnd(+e.currentTarget.value);
    setIsDragging(false);
  };

  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className={styles.inputContainer}>
      <input
        type="range"
        min={min}
        max={max}
        step={0.01}
        value={value}
        onChange={handleOnChange}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        style={{ zIndex: isDragging ? 1 : 2 }}
      />
      <div
        className={styles.indicator}
        style={{ width: value ? (value * 100) / 20000 + '%' : value }}
      >
        <CaretDoubleRight size={28} color='#0FA473' style={{marginRight: '12px', marginLeft: '12px'}}/>
      </div>
    </div>
  );
};

export default Slider;
