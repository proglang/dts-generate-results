export = GithubUrlToObject;

declare function GithubUrlToObject(repoUrl: string | GithubUrlToObject.I__repoUrl, opts?: GithubUrlToObject.I__opts): object | null;
declare namespace GithubUrlToObject {
	export interface I__repoUrl {
		'url'?: string;
	}

	export interface I__opts {
		'enterprise'?: boolean;
	}

}