<?php

namespace App\Http\Controllers\API;

use App\Actions\Auth\LoginAction;
use App\Actions\Auth\RegisterAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserLoginRequest;
use App\Http\Requests\UserRegisterRequest;
use App\User;
use Illuminate\Http\Request;
use Laravel\Passport\Client;

class AuthController extends Controller
{
    public function login(UserLoginRequest $request, LoginAction $loginAction)
    {
        $passportRequest = $loginAction->run($request->all());
        $tokenContent = $passportRequest['content'];

        if (!empty($tokenContent['access_token'])) {
            return $passportRequest['response'];
        }

        return response()->json([
            'message' => 'Unaunthenticated'
        ]);
    }

    public function register(UserRegisterRequest $request, RegisterAction $registerAction)
    {
        $user = $registerAction->run($request->all());

        return response()->json([
            'success' => true,
            'user' => $user
        ]);
    }
}
