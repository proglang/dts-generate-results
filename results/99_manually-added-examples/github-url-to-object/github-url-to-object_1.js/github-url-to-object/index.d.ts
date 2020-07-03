export = GithubUrlToObject;

declare function GithubUrlToObject(repoUrl: string|GithubUrlToObject.I__repoUrl, opts: undefined): object;
declare function GithubUrlToObject(repoUrl: string|GithubUrlToObject.I__repoUrl, opts: GithubUrlToObject.I__opts): null|object;
declare function GithubUrlToObject(repoUrl: GithubUrlToObject.I__repoUrl, opts: undefined): object;
declare namespace GithubUrlToObject {
	export interface I__repoUrl {
		'url': undefined | string;
	}

	export interface I__opts {
		'enterprise': undefined | boolean;
	}

}