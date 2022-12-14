<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Student;


class StudentController extends Controller
{
    // membuat method Student index
    public function index(){
        // $user = [
        //     'nama' => 'Ahmad Fadjar',
        //     'jurusan' => 'Teknik Informatika'
        // ];

        // // mengembalikan data
        // return response()-> json($user, 200);


        // mengambil semua data student pada database
        $student = student::all();

        $data = [
            'messsage' => 'Get All Students',
            'data' => $student
        ];
        return response()-> json($data, 200);
    }

    // Membuat Method Student Post
    public function store(Request  $request){
        // menangkap request
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];  
        // menggunakan students untuk menambahkan datanya
        $student = student::create($input);
        $data = [
            'message' => 'Data Student Created Successfully',
            'data' => $student,
        ];
        // mengembalikan data berupada data JSON format status code 201
        return response()-> json($data, 201);
    }

    public function update(Response $response){
        $update = student::create($update)
                    ->where('id', 1)
                    ->update(['nama' => 1])
                    ->update(['nim' => 1])
                    ->update(['email' => 1])
                    ->update(['jurusan' => 1]);
        $data = [
            'message' => 'Data successfully updated',
            'data' => $student,
        ];
    }


    // mendapatkan detail resource
    // membuat method show
    public function show($id){
        // mencari data student
        $student = student::find($id);

        if($student){
            $data = [
                'message' => 'Get detail student',
                'data' => $student
            ];
            return response()->json($data, 200);
        }else{
            $data = [
                'message' => 'Student not found',
            ];
            return response()->json($data, 404);
        }
        
    }

    // mengupdate resource student
    // membuat method student
    public function update(Request $request, $id){
        // cari data student yg ingin diupdate
        $student = Student::find($id);
        if($student){
            // mendapatkan data request
            $input = [
                'nama' => $request->nama ?? $student->nama,
                'nim' => $request->nim ?? $student->nim,
                'email' => $request->email ?? $student->email,
                'jurusan' => $request->jurusan ?? $student->jurusan
            ];
            // mengupdate data
            $student->update($input);
            $data = [
                'message' => 'Resource student updated successfully',
                'data' => $student,
            ];
            // mengirimkan respon json dengan status code 200
            return response()->json($data, 200);
        }else{
            $data = [
                'message' => 'Student not found',
            ];
            return response()->json($data, 404);
        }
    }
}
