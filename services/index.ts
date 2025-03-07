export interface IResponseInterface {
	status: string;
	code: number;
	message: string;
	data: any;
	errors: Array<any>;
}
