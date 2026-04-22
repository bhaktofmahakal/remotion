import type {LogLevel, LoopVolumeCurveBehavior, VolumeProp} from 'remotion';
import type {MediaOnError} from '../on-error';

export type FallbackHtml5AudioProps = {
	crossOrigin?: '' | 'anonymous' | 'use-credentials' | undefined;
	onError?: (err: Error) => void;
	useWebAudioApi?: boolean;
	acceptableTimeShiftInSeconds?: number;
	pauseWhenBuffering?: boolean;
};

export type AudioProps = {
	src: string;
	/**
	 * When set, `<Audio>` applies timing via an inner `<Sequence layout="none">` that is hidden from the timeline (`showInTimeline={false}`) so the clip still appears once as media.
	 */
	from?: number;
	/**
	 * When set with `from`, bounds the clip in frames. Defaults to `Infinity` like `<Sequence>`.
	 */
	durationInFrames?: number;
	trimBefore?: number;
	trimAfter?: number;
	volume?: VolumeProp;
	loopVolumeCurveBehavior?: LoopVolumeCurveBehavior;
	name?: string;
	showInTimeline?: boolean;
	playbackRate?: number;
	muted?: boolean;
	style?: React.CSSProperties;
	/**
	 * @deprecated For internal use only
	 */
	stack?: string;
	logLevel?: LogLevel;
	loop?: boolean;
	audioStreamIndex?: number;
	_remotionInternalNativeLoopPassed?: boolean;
	fallbackHtml5AudioProps?: FallbackHtml5AudioProps;
	disallowFallbackToHtml5Audio?: boolean;
	toneFrequency?: number;
	delayRenderRetries?: number;
	delayRenderTimeoutInMilliseconds?: number;
	debugAudioScheduling?: boolean;
	onError?: MediaOnError;
	credentials?: RequestCredentials;
	requestInit?: RequestInit;
};
