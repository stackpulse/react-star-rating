import { FC, ReactElement } from 'react';

interface ReactStarsProps {
    classNames?: string;
    edit?: boolean;
    isHalf?: boolean;
    value?: number;
    count?: number;
    char?: string;
    size?: number;
    color?: string;
    activeColor?: string;
    emptyIcon?: ReactElement;
    halfIcon?: ReactElement;
    filledIcon?: ReactElement;
    a11y?: boolean;
    onChange?: (value: number) => void;
}

const ReactStars: FC<ReactStarsProps>;

export default ReactStars;
