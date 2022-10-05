import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: Container(
        decoration: const BoxDecoration(
          border: Border(
            top: BorderSide(width:15,color: Colors.transparent),
            bottom: BorderSide(width:15,color: Colors.transparent),
            left: BorderSide(width:15,color: Colors.transparent),
            right: BorderSide(width:15,color: Colors.transparent),
          )
        ),
        child: ClipRRect(
          borderRadius: const BorderRadius.all(Radius.circular(20)),
          child: BottomNavigationBar(
            backgroundColor: Color(0xff0095FF),
            selectedItemColor: Colors.white,
            items: const [
              BottomNavigationBarItem(
                label: 'Home',
                icon: Icon(Icons.home),
              ),
              BottomNavigationBarItem(
                  label: 'QR Code',
                  icon: Icon(Icons.qr_code),
              ),
              BottomNavigationBarItem(
                label: 'Conta',
                icon: Icon(Icons.account_circle),
              ),
            ],
          )
        )
      )
    );
  }

  Widget get bottomNavigationBar {
    return ClipRRect(
      borderRadius: const BorderRadius.only(
        topRight: Radius.circular(40),
        topLeft: Radius.circular(40),
      ),
      child: BottomNavigationBar(

        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: '1'),
          BottomNavigationBarItem(icon: Icon(Icons.usb), label: '2'),
          BottomNavigationBarItem(
              icon: Icon(Icons.assignment_ind), label: '3'),
          BottomNavigationBarItem(
              icon: Icon(Icons.multiline_chart), label: '4'),
        ],
        unselectedItemColor: Colors.grey,
        selectedItemColor: Colors.black,
        showUnselectedLabels: true,
      ),
    );
  }
}
