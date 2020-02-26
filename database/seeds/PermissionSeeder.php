<?php

use App\Permission;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permission::create([
            'name' => 'View Accounts',
            'slug' => 'view-accounts'
        ]);

        Permission::create([
            'name' => 'Create Accounts',
            'slug' => 'create-accounts'
        ]);

        Permission::create([
            'name' => 'Create Roles',
            'slug' => 'create-roles'
        ]);

        Permission::create([
            'name' => 'View Roles',
            'slug' => 'view-roles'
        ]);

        Permission::create([
            'name' => 'Create Pages',
            'slug' => 'create-pages'
        ]);
    }
}
