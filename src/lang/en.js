exports.Lang = {

	codeStr: 'Error #',
	descrHeader: 'Possible Causes:',

	codes: [
		{
			code: 401,
			message: 'Unauthorized',
			list: [
				'There was a typo in the login credentials',
				'No Index file is present and directory listing is not active'
			]
		},
		{
			code: 403,
			message: 'Forbidden',
			list: [
				'Server settings forbid access to this address',
				'Server has received the request, but refusing it'
			]
		},
		{
			code: 404,
			message: 'File not Found',
			list: [
				'A search engine directs to a deleted page',
				'This page has been moved during an update',
				'There is a type in the address bar'
			]
		},
		{
			code: 410,
			message: 'Resource Gone',
			text: 'There used to be a page here, but no forwarding address is known.'
		},
		{
			code: 500,
			message: 'Internal Server Error',
			list: [
				'A called script stops with an error',
				'The server is overloaded and unresponsive',
				'There is an error in the .htaccess file'
			]
		},
		{
			code: 503,
			message: 'Service Unavailable',
			list: [
				'The server is overloaded and unresponsive',
				'Connection Refused'
			]
		},
		{
			code: 505,
			message: 'HTTP Version Not Supported',
			text: 'The server does not support the HTTP protocol version used in the request.'
		}
	]
}