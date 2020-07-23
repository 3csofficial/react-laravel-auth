<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function returnResponse($status=false,$code=404,$message="" ,$data=[],$action="")
	{
		return response()->json([
			'status'  => $status,
			'code'    => $code,
			'action'  => $action,
			'message' => $message,
			'errors'  => "",
			'data'    => $data,
		], 200);
	}
}
