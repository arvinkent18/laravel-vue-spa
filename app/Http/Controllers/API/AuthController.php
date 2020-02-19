<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login()
    {
    }

    public function register(UserRequest $request)
    {
        $data = $request->all();

        $user = User::create($data);

        return response()->json([
            'success' => true,
            'user' => $user
        ]);
    }
}
