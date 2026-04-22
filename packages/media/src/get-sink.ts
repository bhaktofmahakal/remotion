import type {LogLevel} from 'remotion';
import {Internals} from 'remotion';
import type {GetSink} from './video-extraction/get-frames-since-keyframe';
import {getSinks} from './video-extraction/get-frames-since-keyframe';

export const sinkPromises: Record<string, Promise<GetSink>> = {};

export const getSink = (
	src: string,
	logLevel: LogLevel,
	credentials: RequestCredentials | undefined,
	requestInit?: RequestInit,
) => {
	const cacheKey =
		credentials || requestInit
			? `${src}::${credentials ?? ''}::${JSON.stringify(requestInit ?? {})}`
			: src;
	let promise = sinkPromises[cacheKey];
	if (!promise) {
		Internals.Log.verbose(
			{
				logLevel,
				tag: '@remotion/media',
			},
			`Sink for ${src} was not found, creating new sink`,
		);
		promise = getSinks(src, credentials, requestInit);
		sinkPromises[cacheKey] = promise;
	}

	return promise;
};
