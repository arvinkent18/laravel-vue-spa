<?php

namespace App\Actions\Auth;

use App\User;

class RegisterAction
{
    public function run($request)
    {
        $user = User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => $request['password']
        ]);

        return response()->json([
            'success' => true,
            'user' => $user
        ]);
    }
}
