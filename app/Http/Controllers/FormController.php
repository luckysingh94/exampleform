<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FormController extends Controller
{
    public function show()
    {
        return view('Form');
    }

    public function validStore(Request $request)
    {
        $validate=Validator::make($request->all(),
            ['_name'=>'required',
             '_email'=>'required',
             '_pic'=>'required'
            ]);
        if($validate->fails()){
            $response=['e'=>true,'d'=>$validate->errors()->toArray()];
            return response()->json($response);
        }
    }
}
