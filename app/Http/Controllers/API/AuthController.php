<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRegisterRequest;
use App\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login()
    {
    }

    public function register(UserRegisterRequest $request)
    {
        $data = $request->all();

        $user = User::create($data);

        return response()->json([
            'success' => true,
            'user' => $user
        ]);
    }
}
