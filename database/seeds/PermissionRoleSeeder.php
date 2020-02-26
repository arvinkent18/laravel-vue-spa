<?php

use App\Role;
use App\Permission;
use Illuminate\Database\Seeder;

class PermissionRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $adminRole = Role::where('slug', 'admin')->firstOrFail();
        $adminPermission = Permission::whereIn('slug', ['view-accounts'])->get()
            ->pluck('id')
            ->toArray();

        $adminRole->permissions()
            ->sync($adminPermission);
    }
}
