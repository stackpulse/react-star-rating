import * as React from 'react';

declare module 'react-stars' {
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
        emptyIcon?: React.ReactElement;
        halfIcon?: React.ReactElement;
        filledIcon?: React.ReactElement;
        a11y?: boolean;
        onChange?: (value: number) => void;
    }

    interface ReactStarsState {}

    export default class ReactStars extends React.Component<ReactStarsProps, ReactStarsState> {}
}
