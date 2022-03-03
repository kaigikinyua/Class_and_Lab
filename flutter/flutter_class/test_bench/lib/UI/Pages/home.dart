import 'package:flutter/material.dart';

class Home extends StatelessWidget{
  final String firstname;
  const Home({Key?key,required this.firstname}):super(key:key);
  
  @override
  Widget build(BuildContext context) {
      return MaterialApp(
        theme: ThemeData(
          primaryColor: Colors.green
        ),
        title:'Open Office | ${firstname}',
        home:Row(
          children: [
            const Text('$_fname')
          ]
        )
      );
  }
}