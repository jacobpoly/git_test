package com.koreapolyschool.util.event.vo;

public class InitVO { // 초기 설정 데이터 VO
	
	private int spinTime = 0;
	private int add_spinTime = 15;
	
   private   double startAngle = 0;
   private   double spinAngleStart = 5.625;  //  고정 값
   private	 double spinTimeTotal = Math.random() * 3 + 4 * 1000;   // 회전 총 시간  4~7 초 ;
   private	String[] title;   // [ "쏘맥원샷", "노래방 쏘기", "심부름 하기", "술값 내기", "2차 쏘기", "당첨 니가 쏴", "회비 면제", "파도타기" ]; //sample

public int getSpinTime() {
	return spinTime;
}
public void setSpinTime(int spinTime) {
	this.spinTime = spinTime;
}
public int getAdd_spinTime() {
	return add_spinTime;
}
public void setAdd_spinTime(int add_spinTime) {
	this.add_spinTime = add_spinTime;
}
public double getStartAngle() {
	return startAngle;
}
public void setStartAngle(double startAngle) {
	this.startAngle = startAngle;
}
public double getSpinAngleStart() {
	return spinAngleStart;
}
public void setSpinAngleStart(double spinAngleStart) {
	this.spinAngleStart = spinAngleStart;
}
public double getSpinTimeTotal() {
	return spinTimeTotal;
}
public void setSpinTimeTotal(double spinTimeTotal) {
	this.spinTimeTotal = spinTimeTotal;
}
public String[] getTitle() {
	return title;
}
public void setTitle(String[] title) {
	this.title = title;
}
	
}
